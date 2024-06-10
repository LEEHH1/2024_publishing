const greet = (name: string, greeting?: string) => {
  return `${greeting ?? "hello"}. ${name}`;
};

console.log(greet("이환희", "안녕!"));
console.log(greet("이환희"));
