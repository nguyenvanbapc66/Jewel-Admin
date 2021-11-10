export interface ProposalDataType {
  id: string;
  description: string;
  options: string[];
  correctAnswer: boolean;
  rewardPercent: number;
  voteLimit: number;
  publishDate: null | string;
}

export interface FormCreateProposal {
  description: string;
  correctAnswer: string;
  rewardPercent: string;
  votesLimit: string;
}
