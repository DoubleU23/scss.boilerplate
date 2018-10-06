<<<<<<< HEAD
# ToDo:
* clean Documentation
* add gulp for build
* extend the mixins
* add foundation/bootstrap compatibility
* refactor for importflow (reset, shame, ...)
* improve seperated files VS. full.scss

#### v3
* add tests
* rename
* publish package

#### cv5
* split built and stack versions

# SASS-Boilerplate Documentation
[TOC]

## MQ's in use:
__CAUTION ! IE8 has no MQ's - just a min-width__

__Small (=All)__  
**progressive enhancement** - load this for all clients
> no MQ to use

__Medium__  
for all **tablet** devices
> sreen and (min-width: 640px)

__Large__  
for the **desktop** view
> screen and (min-width: 1024px)
=======

# SCSS Boilerplate
> **modular styling skeleton and compiling setup with gulp**

#### Table of Contents:  
<!-- MarkdownTOC autolink="true" -->

- [MediaQueries](#mediaqueries)
    - [Small \(=All\)](#small-all)
    - [Medium](#medium)
    - [Large](#large)
- [The MQ mixin](#the-mq-mixin)
- [FILES](#files)
    - [/inc](#inc)
    - [/mq](#mq)
- [TODOS:](#todos)

<!-- /MarkdownTOC -->

## MediaQueries

### Small (=All) 
> no MQ to use  

**progressive enhancement** - load this for all clients

### Medium  
> sreen and (min-width: 640px)  

for all **tablet** devices

### Large  
> screen and (min-width: 1024px)  

for the **desktop** view
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38

<a name="mq_mixin"></a>
## The MQ mixin
```
@mixin mq($name) {
<<<<<<< HEAD
    @if( $mq == $name ) {
        @content;
    }
=======
	@if( $mq == $name ) {
		@content;
	}
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38
}
```
__usage:__
```
body {
<<<<<<< HEAD
    @include mq('desktop') { color: red; }
    @include mq('mobile') { color: red; }
=======
	@include mq('desktop') { color: red; }
	@include mq('mobile') { color: red; }
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38
}
```
__OR__
```
@include mq('desktop') {
<<<<<<< HEAD
    body {
        color: red;
    }
=======
	body {
		color: red;
	}
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38
}

```

## FILES

### /inc
<<<<<<< HEAD
**core** includes of the boilerplate **SCSS code** 
=======
This is the order in wich they will be included into the _main.scss
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38

__/inc/_reset.scss__  
html5 doctor css reset - 
[http://html5doctor.com/html-5-reset-stylesheet](http://html5doctor.com)  

__/inc/_variables.scss__  
<<<<<<< HEAD
Obviously, this is the File were we put all variables  
configuration should be seperated from the code  

__/inc/_mixins.scss__  
definitions of mixins and the functions  

__/inc/_helpers.scss__  
helpers like clearfix, border box model, and margin auto ...  
can be uses either as normal CSS-class or as an @extend argugment  
=======
Yes... This is the File were we put all variables  
We could also put it in /_main.scss but i think configuration should be seperated from the code

__/inc/_mixins.scss__  
Here are the functional definitions of the mixins and the functions

__/inc/_helpers.scss__  
helpers like clearfix, border box model, and margin auto ...  
These classes can be uses either as normal CSS-class or as an @extend argugment
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38

### /mq
__/mq/_mobile.scss__, __/mq/_tablet.scss__, __/mq/_dektop.scss__
> The mobile file could also be named "all.scss" because it is loaded for every device  
=> [__mobile first__](http://lmgtfy.com?q=mobile+first)

These are the MQ-specific files. Each MQ in it's own file because of two reasons:  

* We need to set the context per `$mq` variable  
<<<<<<< HEAD
    This variable is recognized by the `mq()` mixin used in _main.scss and /modules/*.scss  
    See [MQ-mixin](#mq_mixin)
    
* Because we have the MQ's in seperate files  
    we can __set the media queries directly in the `<link>`-Tag__ in our HTML header.  
    This __prevents that mobile devices have to load the full CSS__ code for all MQ  
    ( WOW! very fast! such performance! )
=======
	This variable is recognized by the `mq()` mixin used in _main.scss and /modules/*.scss  
	See [MQ-mixin](#mq_mixin)
	
* Because we have the MQ's in seperate files  
	we can __set the media queries directly in the `<link>`-Tag__ in our HTML header.  
	This __prevents that mobile devices have to load the full CSS__ code for all MQ  
	( WOW! very fast! such performance! )
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38
```
<link rel="alternate" media="only screen and (min-width: 640px)" href="/css/tablet.css">  
<link rel="alternate" media="only screen and (min-width: 1024px)" href="/css/desktop.css">
```
<<<<<<< HEAD
=======

## TODOS:
* Clean Documentation
* extend the mixins
* test/improve the ability for Backbone/Foundation Boilerplate implementation
* update the doc (mq's changed ... import flow improved)
* find solution for importflow (reset, shame, ...) maybe put it in all/mobile MQ
* seperated files VS. full.scss
>>>>>>> 874ac1dd8e1471e9b7539c6b3e14905355483a38
