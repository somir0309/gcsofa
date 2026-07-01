const GCSOFA_DEFAULT_STAFF = [
  {
    id: "song-haoyu",
    name: "宋好语",
    title: "业务联系方式",
    avatar: "assets/staff-song-haoyu.webp",
    summary: "负责大客户日常维护与关系推进。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  },
  {
    id: "song-jun",
    name: "宋君",
    title: "业务联系方式",
    avatar: "assets/gcsofa-logo-small.png",
    summary: "负责客户咨询、产品资料、报价沟通与订单跟进。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  },
  {
    id: "he-yishan",
    name: "何奕山",
    title: "业务联系方式",
    avatar: "assets/gcsofa-logo-small.png",
    summary: "负责客户咨询、产品资料、报价沟通与订单跟进。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  },
  {
    id: "gao-jun",
    name: "高军",
    title: "业务联系方式",
    avatar: "assets/gcsofa-logo-small.png",
    summary: "负责客户咨询、产品资料、报价沟通与订单跟进。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  },
  {
    id: "yu-lu",
    name: "余露",
    title: "业务联系方式",
    avatar: "assets/gcsofa-logo-small.png",
    summary: "负责客户咨询、产品资料、报价沟通与订单跟进。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  },
  {
    id: "zhang-xiang",
    name: "张翔",
    title: "业务联系方式",
    avatar: "assets/gcsofa-logo-small.png",
    summary: "负责客户咨询、产品资料、报价沟通与订单跟进。",
    email: "",
    whatsapp: "",
    phone: "",
    wechat: "",
  },
];

const STAFF_STORE_KEY = "gcsofa-staff";
const GCSOFA_REQUIRED_STAFF_IDS = GCSOFA_DEFAULT_STAFF.map((person) => person.id);
const GCSOFA_TEST_STAFF_IDS = ["chen-yu", "zhang-wei", "li-min", "wang-hao"];

function cloneStaff(staff) {
  return JSON.parse(JSON.stringify(staff));
}

function normalizeStaffList(staff) {
  const savedList = Array.isArray(staff) ? staff : [];
  const savedById = new Map(savedList.map((person) => [person.id, person]));
  const mergedDefaults = GCSOFA_DEFAULT_STAFF.map((person) => ({
    ...person,
    ...(savedById.get(person.id) || {}),
  }));
  const extraStaff = savedList.filter(
    (person) => !GCSOFA_REQUIRED_STAFF_IDS.includes(person.id) && !GCSOFA_TEST_STAFF_IDS.includes(person.id),
  );
  return [...mergedDefaults, ...extraStaff];
}

function getStaffList() {
  const saved = localStorage.getItem(STAFF_STORE_KEY);
  if (!saved) {
    return cloneStaff(GCSOFA_DEFAULT_STAFF);
  }

  try {
    return normalizeStaffList(JSON.parse(saved));
  } catch {
    return cloneStaff(GCSOFA_DEFAULT_STAFF);
  }
}

function saveStaffList(staff) {
  return saveCloudStore(STAFF_STORE_KEY, staff);
}

function findStaff(id) {
  return getStaffList().find((person) => person.id === id);
}

function upsertStaff(person) {
  const staff = getStaffList();
  const index = staff.findIndex((item) => item.id === person.id);
  if (index >= 0) {
    staff[index] = person;
  } else {
    staff.unshift(person);
  }
  return saveStaffList(staff);
}

function deleteStaff(id) {
  return saveStaffList(getStaffList().filter((person) => person.id !== id));
}
