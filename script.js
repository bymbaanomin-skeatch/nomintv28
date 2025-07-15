document.getElementById("reveal").addEventListener("click", () => {
  const extra = document.getElementById("extra");

  const line = document.createElement("div");
  line.className = "bubble nomi";
  line.textContent = "Надад чамаас өөр хүн ойлгогдоогүй... тэгээд л энэ сайтыг хийсэн.";
  extra.appendChild(line);

  document.getElementById("reveal").disabled = true;
  document.getElementById("reveal").innerText = "Done.";
});
