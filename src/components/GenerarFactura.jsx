import React from 'react'

function GenerarFactura() {
    
  return (
    <div className='generate-invoice'>
        <button> Generar Factura</button>
        <section>
            <h3>Detalles de Factura</h3>
            <div>
                <p>Fecha:</p>
                <p className='value-factura'></p>
            </div>
            <div>
                <p>Sub total:</p>
                <p className='value-factura'></p>
            </div>
            <div>
                <p>Descuento:</p>
                <p className='value-factura'></p>
            </div>
            <div>
                <p>Iva:</p>
                <p className='value-factura'></p>
            </div>
            <div>
                <p>total:</p>
                <p className='value-factura'></p>
            </div>
        </section>
    </div>
  )
}

export default GenerarFactura