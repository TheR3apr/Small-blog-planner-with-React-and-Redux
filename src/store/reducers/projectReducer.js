const initState = {
    projects: [
        {id:'1',title:'Title 1',content:'Content 1'},
        {id:'2',title:'Title 2',content:'Content 2'},
        {id:'3',title:'Title 3',content:'Content 3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.type, action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;