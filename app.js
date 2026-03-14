const wards = [
  { name: "千代田区", url: "https://www.city.chiyoda.lg.jp" },
  { name: "中央区", url: "https://www.city.chuo.lg.jp" },
  { name: "港区", url: "https://www.city.minato.tokyo.jp" },
  { name: "新宿区", url: "https://www.city.shinjuku.lg.jp" },
  { name: "文京区", url: "https://www.city.bunkyo.lg.jp" },
  { name: "台東区", url: "https://www.city.taito.lg.jp" },
  { name: "墨田区", url: "https://www.city.sumida.lg.jp" },
  { name: "江東区", url: "https://www.city.koto.lg.jp" },
  { name: "品川区", url: "https://www.city.shinagawa.tokyo.jp" },
  { name: "目黒区", url: "https://www.city.meguro.tokyo.jp" },
  { name: "大田区", url: "https://www.city.ota.tokyo.jp" },
  { name: "世田谷区", url: "https://www.city.setagaya.lg.jp" },
  { name: "渋谷区", url: "https://www.city.shibuya.tokyo.jp" },
  { name: "中野区", url: "https://www.city.tokyo-nakano.lg.jp" },
  { name: "杉並区", url: "https://www.city.suginami.tokyo.jp" },
  { name: "豊島区", url: "https://www.city.toshima.lg.jp" },
  { name: "北区", url: "https://www.city.kita.tokyo.jp" },
  { name: "荒川区", url: "https://www.city.arakawa.tokyo.jp" },
  { name: "板橋区", url: "https://www.city.itabashi.tokyo.jp" },
  { name: "練馬区", url: "https://www.city.nerima.tokyo.jp" },
  { name: "足立区", url: "https://www.city.adachi.tokyo.jp" },
  { name: "葛飾区", url: "https://www.city.katsushika.lg.jp" },
  { name: "江戸川区", url: "https://www.city.edogawa.tokyo.jp" },
];

const baseTasks = [
  {
    priority: "urgent",
    title: "在留カード内容確認",
    details: "氏名・在留資格・在留期限・資格外活動許可の有無を確認。誤記がある場合は早急に出入国在留管理局へ。",
  },
  {
    priority: "urgent",
    title: "住民登録（転入届）",
    details: "居住開始から14日以内に区役所で転入届を提出。パスポート・在留カード・住居情報を持参。",
  },
  {
    priority: "urgent",
    title: "マイナンバー受領",
    details: "住民登録後に通知書または個人番号カード交付案内を受領。勤務先提出が必要な場合あり。",
  },
  {
    priority: "important",
    title: "健康保険の加入手続き",
    details: "会社加入の社会保険対象外なら国民健康保険へ加入。会社員は勤務先で手続き状況を確認。",
  },
  {
    priority: "important",
    title: "国民年金 / 厚生年金の確認",
    details: "20歳以上は原則年金制度の対象。勤務形態に応じて国民年金 or 厚生年金の加入状況を確認。",
  },
  {
    priority: "important",
    title: "住所変更（在留カード裏面）",
    details: "区役所で住民登録時に在留カード裏面へ新住所記載を受ける。",
  },
  {
    priority: "done",
    title: "生活インフラ契約",
    details: "電気・ガス・水道・インターネットを契約。開栓立会いが必要な場合は早めに予約。",
  },
];

const studentTasks = [
  {
    priority: "important",
    title: "国民健康保険の学生向け減免確認",
    details: "留学生は保険料軽減の対象となる場合があるため区役所窓口で申請可否を確認。",
  },
  {
    priority: "done",
    title: "資格外活動許可の確認",
    details: "アルバイトをする場合は週28時間以内などの条件を確認。許可がない場合は申請が必要。",
  },
];

const workTasks = [
  {
    priority: "important",
    title: "勤務先への在留情報提出",
    details: "雇用契約・社会保険・税務手続きのため、在留カード・マイナンバー等を会社へ提出。",
  },
  {
    priority: "done",
    title: "住民税・所得税の源泉徴収確認",
    details: "初年度の給与控除・年末調整の流れを人事担当へ確認。",
  },
];

const familyTasks = [
  {
    priority: "important",
    title: "同居家族の住民登録",
    details: "配偶者・子ども全員の在留カードと続柄確認書類を持参し世帯として登録。",
  },
  {
    priority: "done",
    title: "児童手当・子ども医療費助成確認",
    details: "対象年齢の子どもがいる場合、区ごとに申請要件が異なるため窓口で確認。",
  },
];

const minorTask = {
  priority: "important",
  title: "学校・就学関連の手続き",
  details: "義務教育年齢の子どもは区の教育委員会で就学相談・転入学手続きが必要。",
};

const phoneTask = {
  priority: "done",
  title: "銀行口座・携帯契約",
  details: "本人確認（在留カード・住民票・マイナンバー等）を揃えて口座開設とSIM契約を実施。",
};

const domesticMoveTask = {
  priority: "urgent",
  title: "転出証明書の提出",
  details: "日本国内からの転入の場合、前住所地で発行された転出証明書を新区役所へ提出。",
};

const wardSelect = document.querySelector("#wardSelect");
const statusSelect = document.querySelector("#statusSelect");
const arrivalSelect = document.querySelector("#arrivalSelect");
const ageSelect = document.querySelector("#ageSelect");
const withFamily = document.querySelector("#withFamily");
const needsPhone = document.querySelector("#needsPhone");
const buildPlan = document.querySelector("#buildPlan");
const result = document.querySelector("#result");
const summary = document.querySelector("#summary");
const taskList = document.querySelector("#taskList");
const wardLinks = document.querySelector("#wardLinks");

wards.forEach((ward) => {
  const option = document.createElement("option");
  option.value = ward.name;
  option.textContent = ward.name;
  wardSelect.append(option);

  const link = document.createElement("a");
  link.href = ward.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = `${ward.name} 公式サイト`;
  wardLinks.append(link);
});

function buildTasks() {
  const tasks = [...baseTasks];
  const status = statusSelect.value;

  if (status === "student") tasks.push(...studentTasks);
  if (status === "work") tasks.push(...workTasks);
  if (status === "family" || withFamily.checked) tasks.push(...familyTasks);

  if (arrivalSelect.value === "inside") tasks.push(domesticMoveTask);
  if (ageSelect.value === "minor") tasks.push(minorTask);
  if (needsPhone.checked) tasks.push(phoneTask);

  return tasks;
}

buildPlan.addEventListener("click", () => {
  const ward = wardSelect.value;
  const statusLabel = statusSelect.selectedOptions[0].textContent;
  const arrivalLabel = arrivalSelect.selectedOptions[0].textContent;
  const tasks = buildTasks();

  summary.textContent = `対象区: ${ward} / 在留資格: ${statusLabel} / 状況: ${arrivalLabel}。下記の順で進めると漏れを減らせます。`;

  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.priority;
    li.innerHTML = `<strong>${task.title}</strong><br>${task.details}`;
    taskList.append(li);
  });

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#printBtn").addEventListener("click", () => window.print());
