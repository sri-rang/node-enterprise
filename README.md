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
┃                           ┃                  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
┃        Web Console        ┃─ ─ ─ ─ ─ ─ ─ ─ ─▶           HTTP            
┃                           ┃                  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
              │                                                           
              │                                                           
          Consumes                                                        
              │                                                           
              ▼                                                           
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
┃         REST API          ┃─ ─ ─ ─ ─ ─ ─ ─ ─▶           HTTP            
┃                           ┃                  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
              │                                                           
              │                                                           
          Consumes                                                        
              │                                                           
              ▼                                                           
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
┃           Core            ┃─ ─ ─ ─ ─ ─ ─ ─ ─▶     NPM / Artifactory     
┃                           ┃                  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
```

## role management

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
┃        Web Console        ┃─ ─ ─ ─ ─ ─ ─ ─ ─▶           HTTP            
┃                           ┃                  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
              │                                                           
              │                                                           
          Consumes                                                        
              │                                                           
              ▼                                                           
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
┃         REST API          ┃─ ─ ─ ─ ─ ─ ─ ─ ─▶           HTTP            
┃                           ┃                  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
              │                                                           
              │                                                           
          Consumes                                                        
              │                                                           
              ▼                                                           
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                             
┃                           ┃                  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
┃           Core            ┃─ ─ ─ ─ ─ ─ ─ ─ ─▶     NPM / Artifactory     
┃                           ┃                  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                                             
```

## license

MIT

## author

- [Sri](http://srirangan.net) <[srirangan@gmail.com](srirangan@gmail.com)>
