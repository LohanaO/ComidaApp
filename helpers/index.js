export const formatearDinero = (dinero) => {
    return dinero.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}