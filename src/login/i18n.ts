import { createUseI18n } from "keycloakify/login";

export const { useI18n, ofTypeI18n } = createUseI18n({
    en: {
        loginAccountTitle: "Embrace Free Software"
    },
    es: {
        loginAccountTitle: "Vive el Software Libre"
    }
});

export type I18n = typeof ofTypeI18n;
