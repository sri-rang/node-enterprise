## node-enterprise

building blocks for node in the enterprise

## roadmap

- ✔ **concept and kickoff**
- **config-management**
    - ✔ **core**
    - ✔ **restful service**
    - *web console*
- role management
    - core
    - restful service
    - web console
- cli tool
- public website
    - docs
- support plans
- long term stable release

## config management

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌─────────────────────────┐
┃        Web Console        ┃─────────────────▶│          HTTP           │
┃                           ┃                  └─────────────────────────┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
              │                      A                                    
              │                      c                                    
          Consumes                   c                                    
              │                      e                                    
              ▼                      s                                    
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓        s                                    
┃                           ┃                  ┌─────────────────────────┐
┃        RESTful API        ┃─────── c ───────▶│          HTTP           │
┃                           ┃        h         └─────────────────────────┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛        a                                    
              │                      n                                    
              │                      n                                    
          Consumes                   e                                    
              │                      l                                    
              ▼                      s                                    
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌─────────────────────────┐
┃           Core            ┃─────────────────▶│    NPM / Artifactory    │
┃                           ┃                  └─────────────────────────┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
```

## license

MIT

## author

- [Sri](http://srirangan.net) <[srirangan@gmail.com](srirangan@gmail.com)>
