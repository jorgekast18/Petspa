import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="preview"
export default class extends Controller {
  static targets = ["input", "preview"];
  connect() {
    console.log('Hola perrrrooooooo')
  }

  preview() {
    let input = this.inputTarget;
    let preview = this.previewTarget;
    let file = input.files[0];

    let reader = new FileReader();

    reader.onloadend = function() {
      preview.src = reader.result;
    }

    if(file) {
      reader.readAsDataURL()
    } else {
      preview.src = "placeholder.png"
    }
  }
}
