// Saudação dinâmica
function saudacao() {
  const hora = new Date().getHours();
  const saudacaoEl = document.getElementById("saudacao");

  if (hora >= 6 && hora < 12) {
    saudacaoEl.textContent = "Bom dia, Carlos!";
  } else if (hora >= 12 && hora < 18) {
    saudacaoEl.textContent = "Boa tarde, Carlos!";
  } else {
    saudacaoEl.textContent = "Boa noite, Carlos!";
  }
}
saudacao();

// Alternar tema
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Enviar formulário para o back-end
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };

  const response = await fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert("Mensagem enviada com sucesso!");
  } else {
    alert("Erro ao enviar mensagem.");
  }
});
