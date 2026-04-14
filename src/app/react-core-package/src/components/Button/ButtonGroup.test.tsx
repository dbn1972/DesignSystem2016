import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

describe('ButtonGroup', () => {
  it('renders children in a group role', () => {
    render(
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    );
    const group = screen.getByRole('group');
    expect(group).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('applies horizontal orientation by default', () => {
    render(
      <ButtonGroup>
        <Button>A</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('group')).toHaveClass('flex-row');
  });

  it('applies vertical orientation', () => {
    render(
      <ButtonGroup orientation="vertical">
        <Button>A</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('group')).toHaveClass('flex-col');
  });

  it('applies gap classes', () => {
    render(
      <ButtonGroup gap="lg">
        <Button>A</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('group')).toHaveClass('gap-4');
  });

  it('applies connected styling with gap="none"', () => {
    render(
      <ButtonGroup gap="none">
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('group')).toHaveClass('gap-0');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <ButtonGroup ref={ref}>
        <Button>A</Button>
      </ButtonGroup>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('accepts custom className', () => {
    render(
      <ButtonGroup className="my-custom-class">
        <Button>A</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('group')).toHaveClass('my-custom-class');
  });
});
