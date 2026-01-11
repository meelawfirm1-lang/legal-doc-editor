function validateForm() {
  const fields = document.querySelectorAll(
    "input, textarea, select"
  );

  for (let field of fields) {
    if (field.hasAttribute("required") && !field.value.trim()) {
      alert("يرجى اختيار جميع الحقول قبل المتابعة");
      field.focus();
      return false;
    }
  }

  window.location.href = "editor.html";
}
