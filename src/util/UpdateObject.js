const updateProps = (element, propToAdd) => {
    return {
        ...element,
        props: {
            ...element.props,
            ...propToAdd
        }
    }
}

const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    }
}

export {
    updateObject,
    updateProps
}