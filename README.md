# TextScroll 

基于React的文字滚动组件，具有多种展示模式以及参数定制，适用于消息广播、大屏展示等场景

## Dev

```
yarn 

yarn start
```


## Usage

## 垂直滚动

```javascript
import React from 'react'
import TextScroll from 'react-textscroll'

class Content extends React.Component {
	render() {
    	const text = ['1. 第一条消息', '2. 第二条消息', '3. 第三条消息']
    	return (
        	<div>
            	<TextScroll 
                    mode="vertical"
                    text={text} 
                    speed={1000} 
                />
            </div>
        )
    }
}
```

### 水平滚动

```javascript
import React from 'react'
import TextScroll from 'react-textscroll'

class Content extends React.Component {
	render() {
    	const text = '这是一条很长很长的消息，可以由多条组成。今天天气晴，微风，空气质量好，紫外线强'
    	return (
        	<div>
            	<TextScroll 
                    mode="horizontal"
                    text={text} 
                    speed={1000} 
                />
            </div>
        )
    }
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| mode | 文字滚动类型，目前支持水平、垂直 | string: `horizontal` `vertical` | `vertical` |
| text | 要展示的长文字/文字数组 | string/string[] | - |
| speed | 滚动速度 | number | 2000(ms) |
| onChange | 滚动发生时触发 | function({ item, key, node }) | - |

## More

+ 支持typescript类型, 并发布到`@types/react-textscroll`
+ 后续支持JS/CSS两种实现方式，并可自由切换
+ text支持传入react组件
+ 手动控制暂停、开始，通过static property实现



