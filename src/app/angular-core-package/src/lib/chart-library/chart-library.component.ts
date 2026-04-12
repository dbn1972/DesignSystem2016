import { Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component Chart
 * @description Simple data visualization (bar, line, pie charts)
 *
 * @example
 * // Application Status Distribution
 * <ux4g-chart
 *   type="pie"
 *   [data]="[
 *     { label: 'Approved', value: 450, color: '#138808' },
 *     { label: 'Pending', value: 120, color: '#FFA500' },
 *     { label: 'Rejected', value: 30, color: '#D32F2F' }
 *   ]"
 *   [showLegend]="true"
 * ></ux4g-chart>
 *
 * @example
 * // Monthly Applications Bar Chart
 * <ux4g-chart
 *   type="bar"
 *   [data]="[
 *     { label: 'Jan', value: 120 },
 *     { label: 'Feb', value: 150 },
 *     { label: 'Mar', value: 180 },
 *     { label: 'Apr', value: 200 }
 *   ]"
 * ></ux4g-chart>
 *
 * @example
 * // Tax Collection Trend
 * <ux4g-chart
 *   type="line"
 *   [data]="monthlyTaxData"
 *   [width]="600"
 *   [height]="400"
 *   [showLabels]="true"
 * ></ux4g-chart>
 */
export interface ChartData {
  label: string;
  value: number;
  color?: string;
}

@Component({
  selector: 'ux4g-chart',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ux4g-chart" role="img" [attr.aria-label]="getAriaLabel()">
      <svg
        #chartSvg
        [attr.width]="width"
        [attr.height]="height"
        class="ux4g-chart__svg"
        role="presentation"
      ></svg>

      @if (showLegend) {
        <div class="ux4g-chart__legend" role="list">
          @for (item of data; track item.label) {
            <div class="ux4g-chart__legend-item" role="listitem">
              <span
                class="ux4g-chart__legend-color"
                [style.background-color]="item.color || getDefaultColor($index)"
              ></span>
              <span class="ux4g-chart__legend-label">
                {{ item.label }}: {{ item.value }}
              </span>
            </div>
          }
        </div>
      }
    </div>
  `,
  styleUrls: ['./chart-library.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() data: ChartData[] = [];
  @Input() type: 'bar' | 'line' | 'pie' = 'bar';
  @Input() width: number = 400;
  @Input() height: number = 300;
  @Input() colors?: string[];
  @Input() showLegend: boolean = true;
  @Input() showLabels: boolean = true;

  @ViewChild('chartSvg', { static: false }) svgRef!: ElementRef<SVGSVGElement>;

  private defaultColors = ['#0066cc', '#138808', '#FFA500', '#D32F2F', '#9C27B0', '#00BCD4'];

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.svgRef && (changes['data'] || changes['type'] || changes['width'] || changes['height'])) {
      this.renderChart();
    }
  }

  private renderChart(): void {
    if (!this.svgRef || !this.data.length) return;

    const svg = this.svgRef.nativeElement;
    svg.innerHTML = '';

    switch (this.type) {
      case 'bar':
        this.renderBarChart(svg);
        break;
      case 'line':
        this.renderLineChart(svg);
        break;
      case 'pie':
        this.renderPieChart(svg);
        break;
    }
  }

  private renderBarChart(svg: SVGSVGElement): void {
    const padding = 40;
    const chartWidth = this.width - padding * 2;
    const chartHeight = this.height - padding * 2;
    const maxValue = Math.max(...this.data.map(d => d.value));
    const barWidth = chartWidth / this.data.length - 10;

    // Draw bars
    this.data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = padding + index * (chartWidth / this.data.length) + 5;
      const y = this.height - padding - barHeight;

      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', x.toString());
      rect.setAttribute('y', y.toString());
      rect.setAttribute('width', barWidth.toString());
      rect.setAttribute('height', barHeight.toString());
      rect.setAttribute('fill', item.color || this.getDefaultColor(index));
      svg.appendChild(rect);

      // Labels
      if (this.showLabels) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', (x + barWidth / 2).toString());
        text.setAttribute('y', (this.height - padding + 20).toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '12');
        text.textContent = item.label;
        svg.appendChild(text);

        const valueText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        valueText.setAttribute('x', (x + barWidth / 2).toString());
        valueText.setAttribute('y', (y - 5).toString());
        valueText.setAttribute('text-anchor', 'middle');
        valueText.setAttribute('font-size', '12');
        valueText.textContent = item.value.toString();
        svg.appendChild(valueText);
      }
    });
  }

  private renderLineChart(svg: SVGSVGElement): void {
    const padding = 40;
    const chartWidth = this.width - padding * 2;
    const chartHeight = this.height - padding * 2;
    const maxValue = Math.max(...this.data.map(d => d.value));

    let points = '';
    this.data.forEach((item, index) => {
      const x = padding + (index / (this.data.length - 1)) * chartWidth;
      const y = this.height - padding - (item.value / maxValue) * chartHeight;
      points += `${x},${y} `;

      // Draw points
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', x.toString());
      circle.setAttribute('cy', y.toString());
      circle.setAttribute('r', '4');
      circle.setAttribute('fill', item.color || this.getDefaultColor(0));
      svg.appendChild(circle);

      // Labels
      if (this.showLabels) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x.toString());
        text.setAttribute('y', (this.height - padding + 20).toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '12');
        text.textContent = item.label;
        svg.appendChild(text);
      }
    });

    // Draw line
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline.setAttribute('points', points.trim());
    polyline.setAttribute('fill', 'none');
    polyline.setAttribute('stroke', this.getDefaultColor(0));
    polyline.setAttribute('stroke-width', '2');
    svg.insertBefore(polyline, svg.firstChild);
  }

  private renderPieChart(svg: SVGSVGElement): void {
    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const radius = Math.min(this.width, this.height) / 2 - 40;
    const total = this.data.reduce((sum, item) => sum + item.value, 0);

    let currentAngle = -Math.PI / 2; // Start at top

    this.data.forEach((item, index) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      const endAngle = currentAngle + sliceAngle;

      const x1 = centerX + radius * Math.cos(currentAngle);
      const y1 = centerY + radius * Math.sin(currentAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);

      const largeArc = sliceAngle > Math.PI ? 1 : 0;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const d = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');
      path.setAttribute('d', d);
      path.setAttribute('fill', item.color || this.getDefaultColor(index));
      svg.appendChild(path);

      // Labels
      if (this.showLabels) {
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelRadius = radius * 0.7;
        const labelX = centerX + labelRadius * Math.cos(labelAngle);
        const labelY = centerY + labelRadius * Math.sin(labelAngle);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', labelX.toString());
        text.setAttribute('y', labelY.toString());
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '12');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-weight', 'bold');
        const percentage = ((item.value / total) * 100).toFixed(1);
        text.textContent = `${percentage}%`;
        svg.appendChild(text);
      }

      currentAngle = endAngle;
    });
  }

  getDefaultColor(index: number): string {
    if (this.colors && this.colors[index]) {
      return this.colors[index];
    }
    return this.defaultColors[index % this.defaultColors.length];
  }

  getAriaLabel(): string {
    const typeLabel = this.type.charAt(0).toUpperCase() + this.type.slice(1);
    return `${typeLabel} chart showing ${this.data.length} data points`;
  }
}
