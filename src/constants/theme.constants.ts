import { ThemeConfig } from 'antd'

export const colors = {
  primary: '#003049',
  white: '#ffffff',
  background: '#FAFAFA',
  surface: '#2a2f3d',
  lightBlue: '#008ED8',
}

export const theme = {
  token: {
    colorPrimary: colors.primary,
    colorBgBase: colors.background,
    borderRadius: 4,
    borderRadiusLG: 4,
  },
} as ThemeConfig
