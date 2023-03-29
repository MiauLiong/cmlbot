const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "hallo, saya cmlboot, siapa nama kamu..?",
    `hallo ${data?.nama}, berapa usia kamu?`,
    `ohh ${data?.usia}, kalau boleh tau, hobi kamu apa ya?`,
    `waww... sama dong saya juga hobi ${data?.hobi}, btw uda punya pacar gak`,
    `oohh ${data?.pacar}, ya udah kalau gitu yah...`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });

  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah main ke cmlboot😊, kapan-kapan kita mian ${userData[2]} bareng ya`;
  jawaban.value = "oky, thanks juga CMLboot";
}

function botEnd() {
  window.location.reload();
}
