const createCounter = function(init) {
    let cnt = init;
    return {
      increment: () => {
        cnt += 1
        return cnt;
      },
      decrement: () => {
        cnt -= 1
        return cnt;
      },
      reset: () => {
        (cnt = init)
        return cnt;
      },
    }
  };
  
  const counter = createCounter(5)
  console.log(counter.increment()); // 6
  console.log(counter.reset()); // 5
  console.log(counter.decrement());
  






  