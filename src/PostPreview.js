function PostPreview(props){
    let content = null;
    if(props.onlyDescription)
        content = "Only description";
    else
        content = props.item.content;

    return (
        <div className="border p-3">
            <h3> { props.item.title } </h3>
            <hr/>
            <div dangerouslySetInnerHTML={{__html: content }}></div>
        </div>
    )
}

export default PostPreview;