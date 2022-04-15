const shorten = (title)=>{
    const splitetitle = title.split(' ');
    const newTitle = `${splitetitle[0]} ${splitetitle[1]}`;
    return newTitle;
}

const isinCart = (state,id)=>{
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}

const quantityCount = (state,id)=>{
    const index = state.selectedItems.findIndex(item => item.id === id);
    if(index === -1){
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {shorten , isinCart , quantityCount}