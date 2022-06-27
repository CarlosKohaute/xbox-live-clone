# Users module (users)

Whe need create:

X    -users.module.ts
X    -users.controller.ts
X   -users.service.ts

-users.module.ts:
    -Define module class
    -Export ur class
    -Put on module decorator
    -Put on  infos of decorator will received


-users.controller.ts:
    -Define the controller class
    -Export ur class
    -Put on controller decorator
    -Define controller route
    -Create constructor, relating the service that does not yet exist
    -Define ur routes(create and readAll)
    -Put on functions calls of service in routes

-users.service.ts
    -Define the controller class
    -Export ur class
    -Put on service decorator(injectable)
    -Define the methods aren used on controller
