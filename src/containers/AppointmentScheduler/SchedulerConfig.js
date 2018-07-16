export const defaultFormModel = {
    title: {
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Enter appointment title'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false
    },
    datetime: {
        value: null,
        validation: {
            required: true
        },
        valid: false
    }
};
