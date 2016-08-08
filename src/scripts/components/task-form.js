import $ from 'jquery';

class CreateForm {
    constructor(ui) {
        this.ui = ui;

        $(this.ui).submit(function(event) {
            event.preventDefault();
            let value = $(this.elements.input).val();
        });
    }
}

export default CreateForm;