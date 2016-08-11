    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     * @flow
     */

    import React, { Component } from 'react';
    import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
      TabBarIOS
    } from 'react-native';


    var base64IconHome = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAvCAQAAAAVt2HMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAlgAAAJYAJvGvrMAAAMuSURBVFjD7ddPaFVHFMfxT9+fkpo0uoj/aiC4aEwF0TYUBCEVIi6qhXSRjd3ULhpcKIK6EmlxUdzoIoQGhYAtVBBKoUkt6MKSoAQRUjdSTGPF2iimhETTav6Y3C6Sl+bOe0mTvJdNzfxWd87M+c6dOXPOvSympdRp16dPuzqpwFrmOz26p/WrTm8vihO0Ykf0i6bU74jimH2Hv6atGTXkj12r2UjM6YgvrZ0x4j3PssAH8sW+5UcTWW4n/KBqKcG73MpymdHPapcG/KpPPZwVG4n0+kS60ODXfRGEzAtt2ryI9Q353GtqCgeu8I2xmKNnTltlldMBZEyLj/xdGPC7rgdu+hxUBIoc1Bezjfs9WOSiwEkf+i1wcsdeCWy1FQl73Znz7BcBjqeKSV21DSn17rqrXgrbXC0keI2mIFWMOq8cJY4bFIkMOq4E5c4bLQy4UluQKp44oQTrnZtximPOWY8SJzzJH1yjK5j6wD4pbHEly+0VW5Cyz4N8wGkf+yOY2KUGCXvczun4tj0SORc8b3CpzwwFF6TVJqxwOLg68St22Aps0mp84eByXwe3cFSTMpRpNDxn5A5rnBrZlBVo33pjLmy1jmBCv6OKZ32PUJm9KXY06xr+5J3c0IQPshJBtzpJ7Jzl5HKpy04k1ekOLL943yshtsghfwYDO1Ujbb/eeWMjkV77pVGtMysOMql2qq3W6HlsyJgLKrDSqSDU5qMhp6xEhQtBxDzXaPW/qaI1SBVDTirFRhdzJPz5aMxFG1HqZLDwCd97E2rdDCY90iCN7W4sCprRDduR1uBRYLmplvtB5y27kFTvXl7YSOSeekm5Ppnuczm2zZdUmSwCA3ljI5GBqSJS5VJsuy9T6drU44iz1mGDljkrzcI0qsUGrHN2utZdUzmZNrpFBh1TjM3aCwbNqN1mFDtmUKRbdSaud2ue/hVpKDg2kvmTSKnTbHfuDHZgScBZRSIxnzq5FO3lA6cWPCPSZzhWZSJF1mTXnUKDRxxyXXJGz7gdvopXnaV548d6g77HooW6efmCaxm8DF4G/x/BPZ4WnPJUz3+DO5wxUFDsgDM6ws5/ACyDBjd57iOWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA3LTI1VDIxOjQ5OjMxKzA4OjAwSNMPTQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNC0yNFQyMTo1OTo1MyswODowMLPmA2cAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIA5Jg+MAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADg3M6YIV8IAAAAYdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTA5N4iSjNUAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTM5ODM0Nzk5M83hUssAAAATdEVYdFRodW1iOjpTaXplADIwLjVLQkKUWyAWAAAAWnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vaG9tZS93d3dyb290L3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9zcmMvMTE0OTgvMTE0OTg3OC5wbmdjG05UAAAAAElFTkSuQmCC';
    var base64IconNews = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAvCAQAAAA27DAZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAlgAAAJYAJvGvrMAAATYSURBVFjDtdddjFXVFQfw37n3zNxhHEZmgIGBGT5moEQhVokNqNhQxZAYxTItqQqa1KY2sba2TYw+NO1bCSWm7YM+YG2TSu2krYka8cEICkRURFobFL9nYIIfgB0YLsPM3Ln3+DCnd245B7korv1wsvY++7/W/u+1116bcfma17zhyrK+0L/82+Kyfqm9XrWorC+xz6sWlPXl9tutcxwwC5pdrFOXNVrUOmquOdrcrMt0JcfNNUe7dW4yw7C8DnO0+4GVWp00pMMcs9xluWk+VTLVKUOQscx2xwwaEYkUDMYtXR8p64Uz6v22WipgpQOir6B94Jqs9RUsn09pEgb6tH0l4LwXakJRdJ6BA1kXhija6OU4biKR0hcEzAgEoGi5nxEistuT8Q+hFjM0fAHoEz50xGisTRSNgYvt0eh+t2qSO2eaAkP6PWqjE+Ue5BV0gVp/MPqlwq9goxqwTuRwWGG9wxpZRb0KZpsg75BZSg4qocYsh9RrdcoBjWY45iPtGnyoR50FGoRutsm745Djnq82ItJvhak2i2yzwB47zTLbXFfrsdY6Jdu0usWo37nIPt0u1anTUyKRIdenez5dDSL9TtrkOgVHFIw4Zr1vCM10oa3+a69+ffJe1CL0S/P8zYDZMbVTK8MnKZFVPvVgObD+F6IZC33ibXtdY8Bb9rtak3q93jHPtLTYTEpJmxv9w6E4lgrWW+sXjlqqxk5vWazkP07p0OIhU9zuBq9VBx4p+qGc7vhg1fqt5/zFFPN0ekXWStNtV+cyXOUpf9TjNwrVgFPS4S475WNjh/U5KK/RUttMdImFntZmvgGb7ZcTylWQGEsoaa5VE27wuB45JdM8KGOCh11usW5LNLrSP61wgQMe0SN0iXuTWEnwif6kDq0ec1KLyFYlZLRgtW+ahFWu0IR2f3dIvZkuSBKQ7vmYNGsG7RWjDXHeqYt7M6ZWBt/ZwEftM5Dk7ywSmWTR6TuYBB90j11xnCRX5QwJuehaT6g7G3hk2LcsS+TFQN5jsm5Rn5IztxtK9ibBybrKCsVE/4gX5KxMmZM15JUkUPLHwKgNHklhveCwwNo4qf7/ao9YUg14JOte302hZcA9aj2QEnSBv9pdDTiRLXpTAAYdlPV7E1I4f11TteBDyTwhMKKgaESYAj6cdjGmgWd8x/cSIRc4rk/OfWOX72ljj1a7oUUb/DllQ4cdwbflUtb6cVrdlrahGd/XleLdMb9S49caU8a6vV8t5x94mdMgAnknZO1JHKKAlAA4Ay2R1+UTtAROOirj2ZQTGnnXxdXScrfbU5be7w61Hk6lZZMXq/O85AHdgsTih/UKdCXqsUCkz2XVeR641nUpFB73kBo/Sq0ktxgozy9/0zwPNGpOWXqNnNBk9SlzGss14hQzBNrGCpPxiutOkciwNbGJZPM5I2vjN9FRvXodF9lT6fn7BtWrtcEqp6RJgPT6t96ymIXJJoOX/KTS85neOG/PrZcsZAx8dWz/Nh+dF+gdY1EfKgnKN+Zmn/ixyWqdq0TqXBRfI8+725tj4B+bX35iR561VZiaFD5fSr5ui2bscKf3xjpDL5jvp3L2VGzVub/tSq7QgB3uqExhi+wSKSkY+VKtKPKMjkqLWYftkjVJY+LAn6vs8HPvVHZ8Bq1jRdijlJoWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA3LTI1VDIxOjQ5OjMxKzA4OjAwSNMPTQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wNS0yNlQxODoxOTozNSswODowMA02xlAAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIHILdZYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADI3NDX7R7cAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMjY0vxEmqwAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDAxMDk5NTc1w3bRCQAAABJ0RVh0VGh1bWI6OlNpemUANi4xS0JC8+cwwgAAAFp0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzExNjYzLzExNjYzNjIucG5nDv1RRAAAAABJRU5ErkJggg==';
    var base64IconFood = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAQAAADwrpP7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAMgAAADIAGP6560AAAT2SURBVEjHldZ/bJ1lFQfwT2/vGK6lc6VbO92PFrT7kcmAsmEiYTocNIL4I6IDM0icjcYNjAmgxixmyVgmEZWsGiN/KEP+kAU1MbqADJE4I8x1KXHE0nUs25hrt451vaPt2tvHP/rcl/urXfd9/7j3fZ5zvuc85znnPafC5JhhsRYrrTTbLCnDMroddECXjMtErS/ZpduQUPSMOmmPza6dPlmNDV41XEKV/4zr8kOLpkPX4vclZFkXZFwsoe1wjysK1SsK3tLusc01yfuQLh06ndYva7Y6zVpcpzaRGPRzP3KuvG8zPezdxHq/Z91lXpFJqq223eFEbszTGsrRpX3HhUToz9YWH6YAzZ5IjI/7ratLRdY7GwUGbMk71GRI+7xDiQM/84HC7ev1JEdtUznNfFjlQNQasjF/o8ruxLs2qWnSQYs3oma35e8vfzlGb8x2My6DDu50JlLulJ5YqvHXuPR38y6TjkqPGRME/3PjxFJr9C/jc5dNBwt1Rod2qCClPb7uUZ1YrZnG0WvMjP8elRUEB81nvoOx6Nvi9hJP+ZfnfNOCKeiu1aZRFVjuhCAY9Fk+FfPvZLylKz2bVHCH+11Zlq7Rk77gISvUY6Y/xRR/LGWp2aDHsRiRNVEp5Qa/8Li6EroP+4E3rdarVaMlRuwHFVpSGmPeHfYeqE4iCVU2+2kR5VzbnNLsrOX63CqLHmOgIaUxih03DsbiVg4V7vPtvNqZY4dx1apVu8Iip/TghOEJYyk1UXAk/vY5WXTAlK9bldzsDgv1WeaoZU5b6I8CRqI7VSlDUTSXJv0OlcSswR1glq0+odPt/ukz9rvDrwxG7YnAjaTiVVAfv3xjXiw6NDRLq7BBm6Puts+n7bfWX3QkJic+dqdT3o7ONicJsld3CeFFwXybVGl13nUGzDPk10KSlROEfSmHXQDX+FByPe0xxDkEh2Q1akKllZbJaLHd+SRcN8R//6FRlyAY8ZWEYJb2WPATz+sacbOB5IOa8VBec2iKLWHIemZ4Joo9l9Qmczyix4isC4b8xgzUxSINRu0syNZvGBUEXRMNbn1skP0+WXDQj7rLRmttddZX0eqUN3T6hweTZIM6+6KhX07ka739ceH5Ars51NrrsI3etM9HXO2qosR/MDo0YG1u8VvR5SGbS9omrNFr2HG3ltlb7e3ozu/eb1RzvRIXT2oto1TvNcHuvBjnsCjR7HVL/sY6fXHjLbcVKc3S7qKMAfeW0P3BeLymLYW9stJ3k4nmiA15TT7tUcNes8mA7lzXiId9KUms580pdr7KT2Ikg0HtmmPIH3DeabdL2ynYE9tYrU1JJw/+ljcP5WG2J40kQv+1xQqtjhv2CFjsgHGPa/KAl/Nmsb2WmgTVtjiXVyHveEfwulssscRyO4zJ6M4jG7VbkymQ9kUdRVPge87odcoZA/EKcs8J3/NBl8Ri2xwpqOVyE2y/XT5eNmvLoMKN/j0l4VvWlclKctNIESrdZilesNcKTRpUqjDunB5dVmlVry5pGtPAvd4VdFmJCjUaLLDAfLXSuMkxwRE3TZdunWOC8+6bNCAPGxW8qH46dB/TKcj68RQjca0XBFlPlI9jPhZ7WRC8dInBbo1ewaD7p6a7yi5BcNTNlzBcaaus4EhBdZfgemcFGV+bRmgavCoIvj+V0FyvGPNU8UQ/Ce50xoC7Cxf/D57bQVjrLdugAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA3LTI1VDIxOjQ5OjM3KzA4OjAwKwM6dwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wOC0yNVQxNDowMTo0MCswODowMAPL4uwAAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIHILdZYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADEzN8rYbVAAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTE3ax9fjwAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDA4OTQ2NTAw7jlzvQAAABN0RVh0VGh1bWI6OlNpemUAMy42MktCQsa3rLMAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTc0OC8xMTc0ODAyLnBuZzChVXsAAAAASUVORK5CYII=';
    var base64IconSite = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAvCAQAAAAPi4FCAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAMgAAADIAGP6560AAATkSURBVFjDpdhpbJxXFQbgZ8bjqWccx7GdtW6WEiximqZJKGQrkFat1FZikUgFSKhQQRUJEC0VEusfhFSpSCAQBFoVKRW0FaVFAkFQadqmcjYX6iyK6kCTJjixHbt2vI0dLxnPx498nc44Tmfxe//MPfc7573nnHvvuXciisFit/m4ZlFDDtvvmHRRekUh6cv2GxWEbdxJv3SzaHHqsQLjDX7iAVWgzwFv6HNJgw87bbwYgsj7js73Uw+KYspfPK/OZs2SMrr92z8cnVuoIr5pSiAw5lEPOBD23m39fmVl8R5UarJMvQGndZrGKi/6EKY9rt/DasMvU87rMmyx6531PUcKzzXqDk/pNGbKmFN+YQ2+Ji0QOOqxbJIHPelOSyTEVVtuh2+oK2Q+5kHv5DkfaHeX3wsEpu3VEUoPuFflDO2qqyRX4X5DAoMO+rPntBkQCLzlvwKBSW8LBDL+blU5qVzhmFG/tdUClaLqbLLbSI430wKBVjeWt1a+q9v94mHKF2qy3jo/DP14t435fHnm+ZOHRBB3p187rlOf807ozSN4SaJcgkfUY6UnDM1I9Hst4zc2WloewSI02XtN41cILuh32JbyKBr8NTQ05S3/tNszzs5K9GzBs2sWRDwsLZD2qi9aLqFCzGOzEvxBRekEjY4K9PmBhTnSu2dsvUldWnysnADtMC5l54zzPeaJPIJOd6kvx3zUOnG77JbJk6edzumd85plhsoh4I/aZz10mx0TCHTZ5SlnXLC1HPMxE17QMcvISV9wjxqvOuclN+LbjrlUOsXX3V1wErsMmDTqs6Wbr9DvbIHqmpE2T7sO01pn5KqIEJ0t4qsx94i5qNF+LVlpvZst0eOEwdI9y8cHnAuX6+5seWnyM/v8x6CX3T5XggUOhQRtGpHwFa8Z0OuIVuNOuQlxNVfv9GK3/uesltbqpElv2mSVlx2UtEW1fquNq/Wonbbr0Vm6B5Ve1ONZf5OyR8J1obzaI1IumTag1yFPe8Xx/DO3OA8qrDZgo23iauzRHcov+5flNotIOGOPg57UZZMWQWkexP1cKluhd2blEbd7weWcunHIHbaEBbgE1GrNOfiezlaFeLaSBPZ6yON6nLC69Bwstd9IeLsInLQs68EnvCIQmPAZRG3V5ju5qsVVqIT/eVtClUZ1FmhyAQS6JbVZ6pTXkXHIj90r+t5+L47gFvdhTK+LOkxkY1zhS5r9yD5DekJZi1iBO/ss+H5e8Znyu7A8rdHujM1530bC10SIYt4pMRvy+pVuCW/an7RSNLtohWGbKJVgsbV5/S5HJFDt0yZ0mXr/2RXG2pyKN6VVh23W6/ZBH1U/2/lTGkHEdsnw93ktFtshYQXWyRiUtkDXXAhqbQeTDjvvtvCO3Sxig2oxa63x5rXVC+dgg7Xo8Lxp92Wv8DeY7wYVqlT6yNxC9Ckx+3Rm534FC610kxEp9bapkbp2hGciLqlBnaQ6izT6Kjrcmr+6DWu3XsKwmIzn9LssbVivi0aN6jNiQiafYIntNlhnoUXqxVSoLPY9n0XaZdPG9Rp02nGv5/ryrRmvmrm3tDdyPah1q43WuN4KSVXmqRIJWyEEAgTSRl0y5R0dOrU5PptqtVpJdZZoEJcwz3y1atS4Li9rATJGpYwYljJm0pge/UaNGrnyN8P/AWltKKCtTyXmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA3LTI1VDIxOjUwOjQ4KzA4OjAw6hW3jQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNC0wOC0yNVQxNDowMTozNiswODowMGre3s8AAABOdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTEwIFExNiB4ODZfNjQgMjAxNS0wNy0xOSBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZwUMnDUAAABjdEVYdHN2Zzpjb21tZW50ACBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIHILdZYAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADEzNr3fXcYAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTM3WSk9DQAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDA4OTQ2NDk211oH9gAAABN0RVh0VGh1bWI6OlNpemUAMy41MktCQoEX1mMAAABadEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvd3d3LmVhc3lpY29uLm5ldC9jZG4taW1nLmVhc3lpY29uLmNuL3NyYy8xMTc0Ny8xMTc0NzkzLnBuZ/v2iN8AAAAASUVORK5CYII=';


    class lifehelper extends Component {

      constructor(props){
        super(props);
        this.state={
          selectedTab:'首页',
          titleText:'生活帮'
        };
      }

      //切换TAB进行渲染页面内容
      _renderContent(color: string, pageTitle: string, num?: number) {
        switch (pageTitle) {
          case '首页':
          return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
              <Text style={styles.tabText}>{pageTitle}</Text>
            </View>
          );
            break;
            case '新闻':
            return (
              <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageTitle}</Text>
              </View>
            );
              break;
              case '餐饮':
              return (
                <View style={[styles.tabContent, {backgroundColor: color}]}>
                  <Text style={styles.tabText}>{pageTitle}</Text>
                </View>
              );
                break;
                case '景点':
                return (
                  <View style={[styles.tabContent, {backgroundColor: color}]}>
                    <Text style={styles.tabText}>{pageTitle}</Text>
                  </View>
                );
                  break;
          default: break;
        }
      }


      render() {
        return (
          <View style={{flex:1, backgroundColor:"deepskyblue"}}>
            <Text style={styles.welcome}>
              {this.state.titleText}
            </Text>
            <TabBarIOS
            style={{flex:1,alignItems:"flex-end"}}
            tintColor="deepskyblue"
            barTintColor="white">
            <TabBarIOS.Item
              title="首页"
              icon={{uri: base64IconHome, scale:2}}
              selected={this.state.selectedTab === '首页'}
              onPress={() => {
                this.setState({
                  selectedTab: '首页',
                  titleText:'生活帮'
                });
              }}
              >
              {this._renderContent('#ffffff', '首页')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={{uri: base64IconNews, scale:2}}
              selected={this.state.selectedTab === '新闻'}
              title='新闻'
              onPress={() => {
                this.setState({
                  selectedTab: '新闻',
                  titleText:'新闻'
                });
              }}
              >
              {this._renderContent('#ffffff', '新闻', this.state.notifCount)}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              icon={{uri: base64IconFood, scale:2}}
              title='餐饮'
               selected={this.state.selectedTab === '餐饮'}
                onPress={() => {
                this.setState({
                  selectedTab: '餐饮',
                  titleText:'餐饮'
                });
              }}>
               {this._renderContent('#ffffff', '餐饮', this.state.presses)}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title='景点'
              icon={{uri:base64IconSite, scale:2}}
               selected={this.state.selectedTab === '景点'}
                onPress={() => {
                this.setState({
                  selectedTab: '景点',
                  titleText:'景点'
                });
              }}>
               {this._renderContent('#ffffff', '景点', this.state.presses)}
            </TabBarIOS.Item>

          </TabBarIOS>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 16,
        textAlign: 'center',
        color:'white',
        marginTop:30,
        marginBottom:15
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      tabContent: {
        flex: 1,
        alignItems: 'center',
      },
      tabText: {
        color: 'deepskyblue',
        margin: 50,
      },
    });

    AppRegistry.registerComponent('lifehelper', () => lifehelper);
