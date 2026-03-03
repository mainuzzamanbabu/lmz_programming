
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

// Backend / Web Engineering types
export interface BackendCodeExample {
  language: string;
  label: string;
  code: string;
  explanation: string;
}

export interface BackendConcept {
  id: string;
  title: string;
  shortDescription: string;
  metaphor: {
    title: string;
    description: string;
    icon: string;
  };
  visualType: 'client-server' | 'http-methods' | 'status-codes' | 'database' | 'sessions' | 'framework-compare';
  content: string[];
  codeExamples?: BackendCodeExample[];
  keyPoints: string[];
  interactiveHint: string;
}

export interface BackendCurriculum {
  concepts: BackendConcept[];
}

// Django types
export interface DjangoConcept {
  id: string;
  title: string;
  shortDescription: string;
  metaphor: {
    title: string;
    description: string;
    icon: string;
  };
  visualType: 'virtual-env' | 'getting-started' | 'project-structure' | 'mvt' | 'url-routing' | 'views' | 'dtl' | 'template-inheritance' | 'orm' | 'migrations' | 'forms' | 'crud' | 'relationships' | 'middleware' | 'auth' | 'deployment';
  content: string[];
  codeExamples?: BackendCodeExample[];
  keyPoints: string[];
  interactiveHint: string;
}

export interface DjangoCurriculum {
  concepts: DjangoConcept[];
}

// Django REST Framework types
export interface DrfConcept {
  id: string;
  title: string;
  shortDescription: string;
  metaphor: {
    title: string;
    description: string;
    icon: string;
  };
  visualType: 'drf-intro' | 'drf-serializers' | 'drf-views' | 'drf-urls' | 'drf-school';
  content: string[];
  codeExamples?: BackendCodeExample[];
  keyPoints: string[];
  interactiveHint: string;
}

export interface DrfCurriculum {
  concepts: DrfConcept[];
}
