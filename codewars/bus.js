// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

function enough(cap, on, wait) {
    if (cap-on===wait) {
    return 0;
} else if (wait-(cap-on) < 0) {
    return 0;
} else {
    return wait-(cap-on);
}
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);

function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }

  function enough(cap, on, wait) {
    return (on+wait > cap) ? on+wait-cap : 0;
  }

  function enough(cap, on, wait) {

    if (cap < (on + wait)) {
        result = (on + wait) - cap;
    } else {
        result = 0;
    }

    return result;
}

function enough(cap, on, wait) {
    const space = cap - on - wait;
    if (space >= 0) {
        return 0;
    }
    return -1 * space;
}