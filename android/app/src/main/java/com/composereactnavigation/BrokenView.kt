package com.composereactnavigation

import android.content.Context
import android.util.AttributeSet
import android.widget.FrameLayout
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.ComposeView

class BrokenView : FrameLayout {

    constructor(context: Context, attrs: AttributeSet?) : super(context, attrs) {
        init()
    }

    constructor(context: Context, attrs: AttributeSet?, defStyleAttr: Int) : super(context, attrs, defStyleAttr) {
        init()
    }

    constructor(
        context: Context,
    ) : super(context) {
        init()
    }

    private fun init() {
        addView(
            ComposeView(context).apply {
                setContent {
                    Text("Broken text")
                }
            },
        )
    }
}