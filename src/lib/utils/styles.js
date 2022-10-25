export const cn = (...args) => args.filter(Boolean).join(' ');
export const cond = (cond, className) => (cond ? className : '');
