export default class EventBus {
  private readonly listeners: Record<string, Array<() => void>> = {};

  on(event: string | number, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string | number, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Error(`No such event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event: string | number, ...args: any[] ) {
    if (!this.listeners[event]) {
      throw new Event(`No such event: ${event}`);
    }

    this.listeners[event].forEach(listener => {
      listener.apply(null, ...args)
    });
  }
}
