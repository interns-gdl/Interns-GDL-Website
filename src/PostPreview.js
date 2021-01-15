import { Link } from "react-router-dom";

function PostPreview(props){
    let content = null;

    if(props.onlyDescription)
        content = props.item.content.split('<hr />')[0];
    else
        content = props.item.content;

    return (
        <div className="border rounded-3 p-3 m-1">
            <h3> { props.item.title } </h3>
            <hr/>
            <div className="d-block overflow-auto" dangerouslySetInnerHTML={{__html: content }}></div>
            <div className="d-block">
                { props.onlyDescription ?
                    <Link to={`/post/${ props.item.id }` }>
                        <button className="btn btn-indigo">Read More</button>
                    </Link>
                    : ''
                }
            </div>
        </div>
    )
}

export default PostPreview;