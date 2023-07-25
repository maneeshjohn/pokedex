export class Store<S> {
  private state: S;
  private subscribers: Set<(s: S) => unknown> = new Set();

  constructor (s: S) {
    this.state = s;
  }

  getState = (): S => {
    return this.state;
  }

  setState = (ns: Partial<S> | ((s: S) => Partial<S>)) => {
    this.state = {
      ...this.state,
      ...((typeof ns === 'function')
        ? ns(this.state)
        : ns)
    };
    this.emit();
  }

  subscribe = (subscriber: (s: S) => unknown) => {
    this.subscribers.add(subscriber);
    return () => this.subscribers.delete(subscriber);
  }

  emit = () => {
    this.subscribers.forEach(sub => sub(this.state));
  }
}
