const get_context = (name, context) => {
    const is_nested = name.indexOf('.') > -1;
    if (is_nested) {
        const name_split = name.split('.');
        const head = name_split[0];
        const tail = name_split.slice(1).join('.');
        if (!context[head]) context[head] = {};
        return get_context(tail, context[head]);
    }
    else return context;
};

const get_tail_name = (name) => {
    return name.split('.').slice(-1);
};

module.exports = { get_context, get_tail_name };
