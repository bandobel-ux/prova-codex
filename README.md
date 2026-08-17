# Prova Codex

Una piccola applicazione web responsive con un contatore persistente. Il valore viene salvato nel `localStorage` del browser, quindi resta disponibile anche dopo aver ricaricato la pagina.

## Avvio

È sufficiente avere Node.js 18 o successivo:

```bash
npm start
```

Poi visita [http://localhost:4173](http://localhost:4173).

Il server ascolta su tutte le interfacce (`0.0.0.0`), così la porta `4173` può essere
aperta anche tramite la funzione di port forwarding o preview del proprio ambiente
di sviluppo. Host e porta possono essere personalizzati con `HOST` e `PORT`.

## Test

```bash
npm test
```
