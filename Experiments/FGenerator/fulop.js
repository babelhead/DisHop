let add = document.querySelector("#fulop");
  add.addEventListener('mousemove', name);
  function name() {
    let fulop = document.querySelector(".nom");
    let newP = document.createElement("p");
      newP.textContent = genereNom();
      fulop.append(newP);

      nom.addEventListener('mousemove', genereNom);
        function genereNom() {

          let fs = ["F", "f", "Ph", "pH", "Pf", "Pff"];
          let us = ["u", "ü", "ue", "û", "ù", "o"];
          let ls = ["l", "ll", "lll", "l", "ll"]
          let os = ["o", "ö", "ô", "oe", "o"]
          let ps = ["p", "pp", "pe", "p", "pp", "pe"]
          let f = Math.round(Math.random() * 6);
          let u = Math.round(Math.random() * 6);
          let l = Math.round(Math.random() * 6);
          let o = Math.round(Math.random() * 6);
          let po = Math.round(Math.random() * 6);
          let full = fs[f] + us[i] + ls[l] + os[o] + ps[po];
          return(full);
        }
      }
