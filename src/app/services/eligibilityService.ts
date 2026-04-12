export interface EligibilityAnswers {
  isCitizen: string;
  ageAbove18: string;
  hasIdentityProof: string;
  hasAddressProof: string;
  certificateType: string;
}

export const getEmptyEligibilityAnswers = (): EligibilityAnswers => ({
  isCitizen: "",
  ageAbove18: "",
  hasIdentityProof: "",
  hasAddressProof: "",
  certificateType: "",
});

export const allEligibilityAnswered = (answers: EligibilityAnswers): boolean =>
  Object.values(answers).every((value) => Boolean(value));

export const evaluateEligibility = (answers: EligibilityAnswers): boolean =>
  answers.isCitizen === "yes" &&
  answers.ageAbove18 === "yes" &&
  answers.hasIdentityProof === "yes" &&
  answers.hasAddressProof === "yes" &&
  Boolean(answers.certificateType);

export const getMissingEligibilityRequirements = (answers: EligibilityAnswers): string[] => {
  const missing: string[] = [];

  if (answers.isCitizen === "no") {
    missing.push("You must be an Indian citizen to apply.");
  }

  if (answers.ageAbove18 === "no") {
    missing.push("You must be 18 years or above.");
  }

  if (answers.hasIdentityProof === "no") {
    missing.push("Valid identity proof is mandatory.");
  }

  if (answers.hasAddressProof === "no") {
    missing.push("Valid address proof is required.");
  }

  if (!answers.certificateType) {
    missing.push("Select a certificate type to continue.");
  }

  return missing;
};
