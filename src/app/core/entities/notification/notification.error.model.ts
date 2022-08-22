interface Error {
  error: { [key: string]: string[] };
  exception: string;
}

export class ErrorNotification {
  constructor(public error: Error) {}
}
