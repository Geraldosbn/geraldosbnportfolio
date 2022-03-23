function disable (valor) {
    let label = document.getElementById('label-toggle')

    if( valor == 'yes') {
        label.ariaDisabled = true
    }
    console.log(label)
}
disable()