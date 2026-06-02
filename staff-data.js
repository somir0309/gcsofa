const GCSOFA_DEFAULT_STAFF = [
  {
    id: "chen-yu",
    name: "陈雨",
    title: "华东区业务顾问",
    avatar: "assets/staff-chen-yu.png",
    summary: "负责华东区域经销商对接、门店样板配套和工程项目报价。",
    email: "chenyu@gcsofa.example",
    whatsapp: "+86 138 0000 2601",
    phone: "+86 138 0000 2601",
    wechat: "GCSOFA-ChenYu",
  },
  {
    id: "zhang-wei",
    name: "张伟",
    title: "大客户销售经理",
    avatar: "assets/staff-zhang-wei.png",
    summary: "负责房地产样板间、酒店民宿、批量采购和定制项目。",
    email: "zhangwei@gcsofa.example",
    whatsapp: "+86 139 0000 2605",
    phone: "+86 139 0000 2605",
    wechat: "GCSOFA-ZhangWei",
  },
  {
    id: "li-min",
    name: "李敏",
    title: "软装渠道业务",
    avatar: "assets/staff-li-min.png",
    summary: "负责设计师渠道、软装公司合作、面料小样和展厅选品。",
    email: "limin@gcsofa.example",
    whatsapp: "+86 137 0000 2608",
    phone: "+86 137 0000 2608",
    wechat: "GCSOFA-LiMin",
  },
  {
    id: "wang-hao",
    name: "王浩",
    title: "外贸业务顾问",
    avatar: "assets/staff-wang-hao.png",
    summary: "负责海外客户询盘、出口订单、包装标准和跨境物流协调。",
    email: "wanghao@gcsofa.example",
    whatsapp: "+86 136 0000 2612",
    phone: "+86 136 0000 2612",
    wechat: "GCSOFA-WangHao",
  },
];

const STAFF_STORE_KEY = "gcsofa-staff";

function cloneStaff(staff) {
  return JSON.parse(JSON.stringify(staff));
}

function getStaffList() {
  const saved = localStorage.getItem(STAFF_STORE_KEY);
  if (!saved) {
    return cloneStaff(GCSOFA_DEFAULT_STAFF);
  }

  try {
    return JSON.parse(saved);
  } catch {
    return cloneStaff(GCSOFA_DEFAULT_STAFF);
  }
}

function saveStaffList(staff) {
  saveCloudStore(STAFF_STORE_KEY, staff);
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
  saveStaffList(staff);
}

function deleteStaff(id) {
  saveStaffList(getStaffList().filter((person) => person.id !== id));
}
