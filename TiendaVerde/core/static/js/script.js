document.addEventListener("DOMContentLoaded", function() {
    const tipoResiduo = document.getElementById("tipoResiduo");
    const subcategoriaResiduo = document.getElementById("subcategoriaResiduo");

    const subcategorias = {
        plastico: ["Botellas", "Envases", "Bolsas"],
        papel: ["Periódicos", "Cartón", "Papel de oficina"],
        vidrio: ["Botellas", "Frascos", "Cristalería"],
        metales: ["Latas", "Cables", "Electrodomésticos pequeños"],
        electronicos: ["Teléfonos móviles", "Baterías", "Componentes de computadoras"]
    };

    tipoResiduo.addEventListener("change", function() {
        const selectedValue = tipoResiduo.value;
        subcategoriaResiduo.innerHTML = '<option value="">Seleccione una subcategoría</option>';

        if (subcategorias[selectedValue]) {
            subcategorias[selectedValue].forEach(function(subcat) {
                const option = document.createElement("option");
                option.value = subcat.toLowerCase();
                option.textContent = subcat;
                subcategoriaResiduo.appendChild(option);
            });
        }
    });

    document.getElementById("recyclingForm").addEventListener("submit", function(event) {
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const direccion = document.getElementById("direccion").value;

        if (!nombre || !correo || !direccion) {
            alert("Por favor, complete todos los campos obligatorios.");
            event.preventDefault();
        } else if (!validateEmail(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
