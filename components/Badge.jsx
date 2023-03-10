export default function Badge({ children, returning = false }) {
    const colors = {
        returning: 'bg-green-100 text-green-800',
        default: 'bg-yellow-100 text-yellow-800',
    };

    return (
        <small className={`${returning ? colors['returning'] : colors['default']} text-xs font-medium mr-2 px-2 py-0.5 rounded inline-block`}>{children}</small>
    )
}