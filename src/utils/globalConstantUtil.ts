//path: src\utils\globalConstantUtil.ts

export const MODAL_BODY_TYPES = {
    USER_DETAIL: "USER_DETAIL",
    LEAD_ADD_NEW: "LEAD_ADD_NEW",
    CONFIRMATION: "CONFIRMATION",
    DEFAULT: "",
} as const;

export const RIGHT_DRAWER_TYPES = {
    NOTIFICATION: "NOTIFICATION",
    CALENDAR_EVENTS: "CALENDAR_EVENTS",
    DEFAULT: "DEFAULT",
} as const;

export const CONFIRMATION_MODAL_CLOSE_TYPES = {
    LEAD_DELETE: "LEAD_DELETE",
} as const;