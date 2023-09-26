export default function Item ({name, quantity, category }) {
    return (
        <div className='p-4 m-4 bg-slate-900 border border-purple-900'>
            <li>{name}</li>
            <li>{quantity}</li>
            <li>{category}</li>
        </div>
    )
}