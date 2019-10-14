//
//  AppDelegate.swift
//  RNVApp
//
//  Generated by ReNative (https://renative.org)
//
//

import UIKit
import CoreData
import UserNotifications
{{APPDELEGATE_IMPORTS}}

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

    var window: UIWindow?
    let moduleName = "App"

    var uiView: RCTRootView!
    let bundleUrl = {{BUNDLE}}

    {{APPDELEGATE_METHODS}}
}
