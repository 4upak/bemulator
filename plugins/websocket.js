import WebSocket from 'ws'

const ws = new WebSocket('ws://167.235.77.8:8010/ws/emulator/controler/')

export default ({ app }) => {
  app.ws = ws
}
