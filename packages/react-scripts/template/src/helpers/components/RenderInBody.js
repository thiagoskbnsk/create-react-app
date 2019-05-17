import ReactDOM from 'react-dom';

const RenderInBody = props => ReactDOM.createPortal(props.children, document.getElementById('modal'));

export default RenderInBody;
