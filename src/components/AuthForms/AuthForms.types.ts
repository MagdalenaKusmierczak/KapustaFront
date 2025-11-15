export interface AuthFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export interface AuthFormElement extends HTMLFormElement {
  readonly elements: AuthFormElements;
}


