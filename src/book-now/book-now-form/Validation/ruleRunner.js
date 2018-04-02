
export const ruleRunner = (field, name, ...validations) => {
  return (state) => {
    for (let v  of validations) {
      let errorMessageFunc = v(state[field], state);
      if (errorMessageFunc) {
        console.log(field)
        console.log('error message', errorMessageFunc)
        return {[field]: errorMessageFunc(name)};
      }
    }
    return null;
  };
};

export const run = (state, runners) => {

  return runners.reduce((memo, runner) => {
    return Object.assign(memo, runner(state));
  }, {});
};
