class Event {
  constructor() {
    this.listenEvent = {}
  }
  listen(key, fn) {
    if (!this.listenEvent[key]) {
      this.listenEvent[key] = []
    }
    this.listenEvent[key].push(fn)
  }
  trigger(...arg) {
    const fnName = arg[0]
    const args = arg.splice(1)
    const fns = this.listenEvent[fnName]

    for (let i = 0; i < fns.length; i++) {
      const fnTarget = fns[i]
      fnTarget.apply(this, args.length > 1 ? [args] : args)
    }
  }
  off(key, fn) {
    const fns = this.listenEvent[key]
    if (!fns) {
      return
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (let i = 0; i < fns.length; i++) {
        const _fns = fns[i]
        if (_fns === fn) {
          fns.splice(i, 1)
        }
      }
    }
  }
  get events() {
    return this.listenEvent
  }
}
export default new Event()