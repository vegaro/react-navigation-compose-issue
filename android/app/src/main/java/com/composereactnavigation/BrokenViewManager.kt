package com.composereactnavigation

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class BrokenViewManager: SimpleViewManager<BrokenView>()  {
    override fun createViewInstance(themedReactContext: ThemedReactContext): BrokenView {
        return BrokenView(themedReactContext)
    }

    override fun getName(): String {
        return "Broken"
    }
}