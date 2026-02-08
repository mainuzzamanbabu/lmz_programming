
export type ProgrammingLanguage = 'javascript' | 'python';

export interface CodeSnippet {
  language: ProgrammingLanguage;
  code: string;
  explanation: string;
}

export interface Concept {
  id: string;
  title: string;
  shortDescription: string;
  metaphor: {
    title: string;
    description: string;
    icon: string;
  };
  visualType: 'variable' | 'loop' | 'conditional' | 'array' | 'function' | 'object' | 'error' | 'string' | 'boolean' | 'io' | 'class' | 'inheritance' | 'encapsulation' | 'polymorphism';
  snippets: CodeSnippet[];
  useCases: string[];
}

export interface Curriculum {
  concepts: Concept[];
}
